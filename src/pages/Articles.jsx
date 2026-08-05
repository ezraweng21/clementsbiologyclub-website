import { useState } from "react";
import siteContent from "../data/siteContent";

function Articles() {
  const { articles } = siteContent;
  const [activeFilter, setActiveFilter] = useState("All articles");

  const filteredArticles =
    activeFilter === "All articles"
      ? articles.archive
      : articles.archive.filter((article) => article.category === activeFilter);

  return (
    <section className="section page-section programs-page-shell articles-page">
      <div className="container">
        <div className="page-header programs-page-header">
          <p className="page-eyebrow">Bio Bites</p>
          <h1>{articles.title}</h1>
          <p className="section-text">
            Student-written biology articles, practical science storytelling,
            and a place for members to build their voice.
          </p>
        </div>

        <div className="programs-layout">
          <section className="section-panel programs-panel article-month-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Featured</p>
                <h2 className="subsection-title">Article of the Month</h2>
              </div>
            </div>

            <div className="content-grid two-col">
              <article className="content-card article-feature-card">
                <h3>{articles.articleOfMonth.title}</h3>
                <p className="resource-meta">
                  {articles.articleOfMonth.author}
                  {articles.articleOfMonth.grade
                    ? ` • Grade ${articles.articleOfMonth.grade}`
                    : ""}
                </p>
                <blockquote className="spotlight-quote">
                  "{articles.articleOfMonth.quote}"
                </blockquote>
              </article>

              <article className="content-card">
                <h3>Submit Your Article</h3>
                <p>
                  Think you can write a better article? Try it. Monthly winners
                  get $25 and the annual winner gets $50.
                </p>
                {articles.submissionLink ? (
                  <a
                    href={articles.submissionLink}
                    className="resource-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Submit Your Article
                  </a>
                ) : (
                  <span className="resource-link resource-link-disabled">
                    {articles.submissionFallback}
                  </span>
                )}
              </article>
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Archive</p>
                <h2 className="subsection-title">Browse Articles</h2>
              </div>
            </div>

            <div className="filter-row">
              {articles.categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    category === activeFilter
                      ? "filter-chip filter-chip-active"
                      : "filter-chip"
                  }
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredArticles.length > 0 ? (
              <div className="card-grid">
                {filteredArticles.map((article) => (
                  <article className="card card-accent" key={article.title}>
                    <p className="resource-label">{article.category}</p>
                    <h3>{article.title}</h3>
                    <p className="resource-meta">
                      {article.author}
                      {article.grade ? ` • Grade ${article.grade}` : ""}
                    </p>
                    <p>{article.preview}</p>
                    <p className="resource-meta">{article.date}</p>
                    {article.link ? (
                      <a
                        href={article.link}
                        className="resource-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    ) : (
                      <span className="resource-link resource-link-disabled">
                        Article link coming soon
                      </span>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="content-card empty-state-card">
                <h3>Archive in Progress</h3>
                <p>
                  Published Bio Bites articles can be added here as the archive
                  grows. The page structure is ready for category filtering,
                  highlights, and author credit.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
}

export default Articles;
