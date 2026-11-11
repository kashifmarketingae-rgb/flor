"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FileCheck2,
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  FileText,
  Clock,
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FEATURES = [
  {
    icon: FileText,
    title: "تأطير الشكوى",
    desc: "تنظيم البيانات والمرفقات وتجهيزها للعرض الفوري.",
    tile: "bg-[#00732F]/10 text-[#00732F] group-hover:bg-[#00732F] group-hover:text-white",
    bar: "bg-[#00732F]",
    hoverRotate: -8,
  },
  {
    icon: Clock,
    title: "متابعة لحظية",
    desc: "معرفة مرحلة الشكوى والتحديثات عبر رقم الطلب.",
    tile: "bg-[#E4002B]/10 text-[#E4002B] group-hover:bg-[#E4002B] group-hover:text-white",
    bar: "bg-[#E4002B]",
    hoverRotate: 12,
  },
  {
    icon: CheckCircle,
    title: "معالجة عادلة",
    desc: "ضمان إيصال ملاحظاتك للجهات المختصة بحيادية.",
    tile: "bg-[#111111]/10 text-[#111111] group-hover:bg-[#111111] group-hover:text-white",
    bar: "bg-[#111111]",
    hoverRotate: -8,
  },
];

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section
      dir="rtl"
      aria-label="الرئيسية - منصة حماية المستهلك"
      /* 
        التعديل المطلوب:
        - الموبايل والتابلت (افتراضي): bg-[url('/hero.png')]
        - الديسكتوب (lg فصاعداً): lg:bg-[url('/ll.png')]
      */
      className="relative overflow-hidden bg-[url('/hero.png')] lg:bg-[url('/ll.png')] bg-cover bg-center bg-no-repeat py-16 md:py-24"
    >
      {/* طبقة بيضاء ناعمة: تريّح العين وتبرز النص وتحافظ على الصورة */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 to-white/40" />

      <div className="container-page relative z-10">
        {/* الجزء العلوي: الشارة + العنوان + الوصف */}
        <div className="max-w-3xl">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-[#00732F]/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#00732F] shadow-sm sm:text-sm"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#00732F]" />
            <span>المنصة المعتمدة وحاضنة الحقوق</span>
            {/* نقاط ألوان العلم */}
            <span aria-hidden="true" className="mr-1 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00732F]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#E4002B]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 text-3xl font-bold leading-[1.25] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
          >
            منصة حماية المستهلك <br />
            <span className="font-normal text-[#000000]/70">
              لرفع وتقديم شكاوى المستهلك
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-[#111111]/75 sm:text-lg"
          >
            منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد.
          </motion.p>
        </div>

        {/* زر تقديم الشكوى */}
        <motion.div {...fadeUp(0.24)} className="mt-9 flex items-center gap-4">
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#000000] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#000000]/80 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00732F]/30 active:scale-95"
          >
            <FileCheck2 className="h-5 w-5 text-white" />
            <span>تقديم شكوى جديدة</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </motion.div>

        {/* البطاقات السفلية: أيقونات تفاعلية */}
        <motion.div
          {...fadeUp(0.32)}
          className="mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, desc, tile, bar, hoverRotate }) => (
            <motion.div
              key={title}
              tabIndex={0}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="group relative flex cursor-default items-start gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-4 focus-visible:ring-[#00732F]/25"
            >
              {/* الأيقونة التفاعلية */}
              <motion.div
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 1.12, rotate: hoverRotate }
                }
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`shrink-0 rounded-lg p-2.5 transition-colors duration-300 ${tile}`}
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#111111]">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>

              {/* سهم يظهر عند المرور */}
              <ArrowLeft className="absolute left-4 top-5 h-4 w-4 translate-x-2 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

              {/* خط سفلي يمتد عند المرور بلون البطاقة */}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 right-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${bar}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}