import React, { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/fc6b77df-a882-4840-921b-81df217034e3/files/ca64243a-1f3e-46d3-b1c3-222afbad4ba4.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/fc6b77df-a882-4840-921b-81df217034e3/files/bf2fdffa-0e28-438e-9192-e20e36b4883c.jpg";
const TERRACE_IMG = "https://cdn.poehali.dev/projects/fc6b77df-a882-4840-921b-81df217034e3/files/d4c904ba-a430-41ad-96cc-cc0c32e240b4.jpg";

const GALLERY = [HERO_IMG, INTERIOR_IMG, TERRACE_IMG, HERO_IMG, INTERIOR_IMG, TERRACE_IMG, HERO_IMG, INTERIOR_IMG];

const REVIEWS = [
  { name: "Анна", city: "Москва", text: "Отдыхали в июле прошлого года всей семьёй. Вода в озере чистейшая, воздух чудесный. Дом очень уютный, всё необходимое есть. Обязательно вернёмся!", rating: 5 },
  { name: "Дмитрий", city: "Санкт-Петербург", text: "Провели здесь две недели — лучший отдых за последние годы. Рыбалка каждое утро, тишина, природа. Хозяева очень приятные люди.", rating: 5 },
  { name: "Марина", city: "Нижний Новгород", text: "Снимали дом для компании из 4 человек. Беседка с мангалом — просто отлично. Всё чисто, опрятно, удобно. Рекомендую!", rating: 5 },
];

const FEATURES = [
  { icon: "Waves", text: "100 м до берега озера" },
  { icon: "TreePine", text: "Участок 15 соток" },
  { icon: "Flame", text: "Беседка и мангал" },
  { icon: "Wifi", text: "Wi-Fi и ТВ" },
  { icon: "Car", text: "Парковка на 2 машины" },
  { icon: "Users", text: "До 6 гостей" },
];

const AMENITIES = [
  { icon: "Refrigerator", text: "Холодильник" },
  { icon: "Flame", text: "Газовая плита" },
  { icon: "Zap", text: "Микроволновка" },
  { icon: "Wind", text: "Стиральная машина" },
  { icon: "Thermometer", text: "Кондиционер" },
  { icon: "Droplets", text: "Горячая вода" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", from: "", to: "", guests: "2", agree: false });
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-cream font-golos">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-cormorant font-semibold text-lake-deep tracking-wide">Дом у озера</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-stone font-golos text-sm hover:text-lake transition-colors">
              <Icon name="Phone" size={16} />
              +7 (999) 123-45-67
            </a>
            <button
              onClick={scrollToForm}
              className="px-5 py-2 bg-lake text-white text-sm font-golos font-medium rounded-full hover:bg-lake-deep transition-all duration-300 hover:shadow-md"
            >
              Забронировать
            </button>
          </div>
          <button
            onClick={scrollToForm}
            className="md:hidden px-4 py-2 bg-lake text-white text-sm font-golos rounded-full"
          >
            Бронь
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src={HERO_IMG} alt="Дом у озера" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="font-golos text-sm tracking-[0.3em] uppercase text-white/70 mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            Аренда на лето 2026
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            Уютный дом<br />
            <em className="font-light italic">у озера</em>
          </h1>
          <p className="font-golos text-lg md:text-xl text-white/85 mb-3 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
            Отдых вдали от города: чистый воздух, рыбалка, прогулки
          </p>
          <p className="font-golos text-sm text-white/65 mb-10 animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}>
            Комфортное размещение до 6 человек
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.9s", opacity: 0, animationFillMode: "forwards" }}>
            <button
              onClick={scrollToForm}
              className="px-8 py-3.5 bg-white text-lake-deep font-golos font-medium rounded-full hover:bg-lake-pale transition-all duration-300 hover:shadow-lg"
            >
              Забронировать сейчас
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 border border-white/50 text-white font-golos rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Узнать подробности
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">О доме</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-6">
              Всё для настоящего отдыха
            </h2>
            <div className="section-divider" />
            <p className="font-golos text-stone max-w-2xl mx-auto leading-relaxed">
              Дом из бруса площадью 80 кв. м на ухоженном участке 15 соток. В 100 метрах — песчаный пляж озера.
              На территории: беседка с мангалом, качели, парковка. Внутри — всё для комфортного отдыха.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[HERO_IMG, INTERIOR_IMG, TERRACE_IMG].map((img, i) => (
              <div key={i} className={`gallery-item rounded-2xl overflow-hidden reveal reveal-delay-${i + 1} ${i === 0 ? "md:col-span-2 h-72" : "h-72"}`}>
                <img src={img} alt="Дом" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {FEATURES.map((f) => (
              <div key={f.text} className="flex items-center gap-3 p-4 rounded-xl bg-stone-light hover:bg-lake-pale transition-colors duration-300">
                <div className="w-9 h-9 rounded-full bg-lake-pale flex items-center justify-center flex-shrink-0">
                  <Icon name={f.icon} size={18} className="text-lake" />
                </div>
                <span className="font-golos text-sm text-foreground">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYOUT & AMENITIES */}
      <section className="py-24 bg-stone-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">Планировка</p>
              <h2 className="font-cormorant text-4xl font-light text-foreground mb-6">Комнаты и удобства</h2>
              <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
              <div className="space-y-4 mb-8">
                {[
                  { icon: "BedDouble", label: "2 спальни", desc: "На 2 и 4 гостей, удобные кровати" },
                  { icon: "Sofa", label: "Гостиная", desc: "Диван, ТВ, камин" },
                  { icon: "ChefHat", label: "Кухня", desc: "Полностью оборудована" },
                  { icon: "Bath", label: "Санузел", desc: "Душ + ванна, горячая вода" },
                  { icon: "TreePine", label: "Терраса", desc: "Вид на озеро и лес" },
                ].map((room) => (
                  <div key={room.label} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-lake-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={room.icon} size={19} className="text-lake" />
                    </div>
                    <div>
                      <p className="font-golos font-medium text-foreground">{room.label}</p>
                      <p className="font-golos text-sm text-stone">{room.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">Оборудование</p>
              <h2 className="font-cormorant text-4xl font-light text-foreground mb-6">Всё включено</h2>
              <div className="section-divider" style={{ margin: "0 0 1.5rem" }} />
              <div className="grid grid-cols-2 gap-3">
                {AMENITIES.map((a) => (
                  <div key={a.text} className="flex items-center gap-3 p-3.5 bg-white rounded-xl">
                    <Icon name={a.icon} size={17} className="text-lake flex-shrink-0" />
                    <span className="font-golos text-sm text-foreground">{a.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-5 bg-lake-pale rounded-2xl border border-lake/20">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MapPin" size={18} className="text-lake" />
                  <p className="font-golos font-medium text-lake-deep">Расположение</p>
                </div>
                <div className="space-y-1.5 font-golos text-sm text-stone">
                  <p>🏖 Пляж озера — 100 м</p>
                  <p>🛒 Ближайший магазин — 3 км</p>
                  <p>🚌 Остановка автобуса — 2 км</p>
                  <p>🌲 Лес для прогулок — рядом</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">Аренда</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-3">Условия и цены</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Будни", period: "Пн–Пт", price: "5 000", unit: "₽/сутки", accent: false },
              { label: "Выходные", period: "Сб–Вс", price: "7 000", unit: "₽/сутки", accent: true },
              { label: "Неделя", period: "Пн–Пт, 5 ночей", price: "25 000", unit: "₽", accent: false },
            ].map((p) => (
              <div
                key={p.label}
                className={`reveal p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  p.accent
                    ? "bg-lake text-white"
                    : "bg-stone-light border border-stone-200"
                }`}
              >
                <p className={`font-golos text-xs tracking-[0.25em] uppercase mb-2 ${p.accent ? "text-white/70" : "text-stone"}`}>
                  {p.period}
                </p>
                <p className={`font-cormorant text-5xl font-light mb-1 ${p.accent ? "text-white" : "text-foreground"}`}>
                  {p.price}
                </p>
                <p className={`font-golos text-sm ${p.accent ? "text-white/80" : "text-stone"}`}>{p.unit}</p>
                <p className={`font-cormorant text-xl font-light mt-3 ${p.accent ? "text-white" : "text-lake"}`}>{p.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
            <div className="p-6 bg-lake-pale rounded-2xl border border-lake/15">
              <h3 className="font-cormorant text-2xl font-light text-lake-deep mb-4">Доступность</h3>
              <div className="space-y-2 font-golos text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lake" />
                  <span>Свободно: июнь — август 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lake" />
                  <span>Минимальный срок — 2 суток</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lake" />
                  <span>Заезд с 14:00, выезд до 12:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-stone" />
                  <span className="text-stone">Залог 10 000 ₽ (возвращается при выезде)</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-stone-light rounded-2xl border border-stone-200">
              <h3 className="font-cormorant text-2xl font-light text-foreground mb-4">Правила</h3>
              <div className="space-y-2 font-golos text-sm text-stone">
                <div className="flex items-center gap-2">
                  <Icon name="X" size={15} className="text-red-400 flex-shrink-0" />
                  <span>Без животных</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="X" size={15} className="text-red-400 flex-shrink-0" />
                  <span>Без шумных мероприятий после 23:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={15} className="text-lake flex-shrink-0" />
                  <span>Разрешено барбекю и рыбалка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={15} className="text-lake flex-shrink-0" />
                  <span>Дети всех возрастов приветствуются</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-stone-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">Отзывы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-3">Что говорят гости</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={r.name} className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-7 border border-stone-200 hover:border-lake/30 hover:shadow-md transition-all duration-300`}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-base">★</span>
                  ))}
                </div>
                <p className="font-cormorant text-lg italic text-foreground leading-relaxed mb-5">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lake-pale flex items-center justify-center">
                    <span className="font-cormorant text-lg text-lake">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-golos font-medium text-sm text-foreground">{r.name}</p>
                    <p className="font-golos text-xs text-stone">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-golos text-xs tracking-[0.3em] uppercase text-lake mb-3">Галерея</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-3">Фотографии</h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
            {GALLERY.map((img, i) => (
              <div key={i} className={`gallery-item rounded-xl overflow-hidden ${i === 0 || i === 5 ? "md:col-span-2 h-56" : "h-40"}`}>
                <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <div ref={formRef} id="booking" className="py-24 bg-lake-deep">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="font-golos text-xs tracking-[0.3em] uppercase text-white/50 mb-3">Бронирование</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-3">
              Забронировать дом
            </h2>
            <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
            <p className="font-golos text-white/70 text-sm leading-relaxed">
              Заполните форму, и мы свяжемся с вами для подтверждения брони.<br />
              Гарантируем ответ в течение 1 часа!
            </p>
          </div>

          {sent ? (
            <div className="text-center py-12 reveal">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-white" />
              </div>
              <h3 className="font-cormorant text-3xl text-white mb-2">Заявка отправлена!</h3>
              <p className="font-golos text-white/60">Мы перезвоним вам в течение часа.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-5 reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-golos text-xs text-white/60 uppercase tracking-wider mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-golos text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-white/60 uppercase tracking-wider mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/40 font-golos text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-golos text-xs text-white/60 uppercase tracking-wider mb-2 block">Дата заезда</label>
                  <input
                    type="date"
                    required
                    value={form.from}
                    onChange={(e) => setForm({ ...form, from: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white font-golos text-sm focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-white/60 uppercase tracking-wider mb-2 block">Дата выезда</label>
                  <input
                    type="date"
                    required
                    value={form.to}
                    onChange={(e) => setForm({ ...form, to: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white font-golos text-sm focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>
              <div>
                <label className="font-golos text-xs text-white/60 uppercase tracking-wider mb-2 block">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white font-golos text-sm focus:outline-none focus:border-white/50 transition-colors [color-scheme:dark]"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>
                  ))}
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  onClick={() => setForm({ ...form, agree: !form.agree })}
                  className={`mt-0.5 w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors cursor-pointer ${form.agree ? "bg-white border-white" : "border-white/40 bg-transparent"}`}
                >
                  {form.agree && <Icon name="Check" size={12} className="text-lake-deep" />}
                </div>
                <span className="font-golos text-sm text-white/60 leading-relaxed">
                  Согласен с условиями аренды и правилами проживания
                </span>
              </label>
              <button
                type="submit"
                disabled={!form.agree}
                className="w-full py-4 bg-white text-lake-deep font-golos font-medium rounded-xl hover:bg-lake-pale transition-all duration-300 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed text-base"
              >
                Отправить заявку
              </button>
              <p className="text-center font-golos text-xs text-white/40">
                Мы перезвоним в течение часа для подтверждения
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#1a3530] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            <div>
              <h3 className="font-cormorant text-2xl font-light text-white mb-3">Дом у озера</h3>
              <p className="font-golos text-sm text-white/50 leading-relaxed">
                Дом ждёт вас этим летом!
              </p>
            </div>
            <div>
              <p className="font-golos text-xs tracking-[0.25em] uppercase text-white/40 mb-4">Контакты</p>
              <div className="space-y-2">
                <a href="tel:+79991234567" className="flex items-center gap-2 font-golos text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="Phone" size={15} />
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:dom@ozero.ru" className="flex items-center gap-2 font-golos text-sm text-white/70 hover:text-white transition-colors">
                  <Icon name="Mail" size={15} />
                  dom@ozero.ru
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/20 text-[#25D366] rounded-lg font-golos text-sm hover:bg-[#25D366]/30 transition-colors"
                >
                  <Icon name="MessageCircle" size={15} />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/domozero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#229ED9]/20 text-[#229ED9] rounded-lg font-golos text-sm hover:bg-[#229ED9]/30 transition-colors"
                >
                  <Icon name="Send" size={15} />
                  Telegram
                </a>
              </div>
            </div>
            <div>
              <p className="font-golos text-xs tracking-[0.25em] uppercase text-white/40 mb-4">Адрес</p>
              <div className="flex items-start gap-2 font-golos text-sm text-white/60 leading-relaxed">
                <Icon name="MapPin" size={15} className="flex-shrink-0 mt-0.5 text-lake-light" />
                <span>Посёлок Озерки, ул. Лесная, 15<br />Московская область</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="font-golos text-xs text-white/30">© 2026 Дом у озера. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/79991234567?text=Здравствуйте!%20Интересует%20аренда%20дома%20у%20озера."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={26} className="text-white" />
      </a>
    </div>
  );
}