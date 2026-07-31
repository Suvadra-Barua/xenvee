import SectionTitle from "@/components/custom/SectionTitle";
import news from "@/app/data/news";

const News = () => {
  return (
    <section id="news" className="scroll-mt-20 pt-14">
      <SectionTitle title="News" />

      <dl className="border-t border-ink-100">
        {news.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-1 border-b border-ink-100 py-3 text-sm sm:grid-cols-[100px_1fr] sm:gap-4"
          >
            <dt className="font-mono text-xs text-ink-500">{item.date}</dt>
            <dd
              className="text-ink-700 [&_em]:italic [&_strong]:font-medium [&_strong]:text-ink-900"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </div>
        ))}
      </dl>
    </section>
  );
};

export default News;
