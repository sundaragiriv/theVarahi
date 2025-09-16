import { useEffect, useRef } from "react";
export default function GridSparkle({ speed = 0.6, density = 0.002 }: { speed?: number; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const c = ref.current!;
    const ctx = c.getContext("2d", { alpha: true })!;
    let w = c.width = c.offsetWidth * devicePixelRatio;
    let h = c.height = c.offsetHeight * devicePixelRatio;
    const onResize = () => {
      w = c.width = c.offsetWidth * devicePixelRatio;
      h = c.height = c.offsetHeight * devicePixelRatio;
    };
    const ro = new ResizeObserver(onResize); ro.observe(c);
    // Particles flowing diagonally (↗︎), low opacity, occasional “glint”
    const N = Math.max(16, Math.floor(w * h * density / 2));
    const p: {x:number;y:number;v:number;o:number;l:number}[] = Array.from({length:N}, () => ({
      x: Math.random()*w, y: Math.random()*h, v: (0.3 + Math.random()*0.7) * speed, o: Math.random()*0.06 + 0.02, l: 20 + Math.random()*60
    }));
    let raf = 0;
    const step = () => {
      ctx.clearRect(0,0,w,h);
      ctx.globalCompositeOperation = 'lighter';
      for (let i=0;i<N;i++){
        const a = p[i];
        // movement along 45° (cos=sin≈0.707)
        a.x += 0.707 * a.v; a.y -= 0.707 * a.v;
        if (a.x > w+80) a.x = -80;
        if (a.y < -80) a.y = h+80;
        // draw tiny streak
        const lw = 1 * devicePixelRatio;
        ctx.lineWidth = lw;
        const grad = ctx.createLinearGradient(a.x, a.y, a.x - a.l, a.y + a.l);
        grad.addColorStop(0, `rgba(0,112,242,${a.o})`);
        grad.addColorStop(1, `rgba(77,177,255,0)`);
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(a.x - a.l, a.y + a.l);
        ctx.stroke();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [speed, density]);
  return <canvas ref={ref} className="pointer-events-none absolute inset-0 -z-20" />;
}
