import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>Your menu</li>
          </ul>
        </nav>
      </header>
      <main id="wrapper" role="main">
        <section id="content">
          <article
            id="post-123"
            itemscope
            itemtype="http://schema.org/BlogPosting"
          >
            <header>
              <h1 itemprop="headline">Blog Post Title</h1>
              <b>
                <time itemprop="datePublished" datetime="2009-10-09">
                  3 days ago
                </time>
              </b>
            </header>
            <p>This is some blog post content. Within an article element.</p>

            <footer role="contentinfo">
              <p>Post written by Dwayne and posted in category: Potatoes.</p>
            </footer>

            <section id="comments">
              <article
                itemprop="comment"
                itemscope
                itemtype="http://schema.org/UserComments"
              >
                <p>This is my all important comment, please don't delete it.</p>

                <footer>
                  <p>Posted by: George Washington</p>
                  <p>
                    <time itemprop="commentTime" datetime="2009-10-10">
                      15 minutes ago
                    </time>
                  </p>
                </footer>
              </article>
            </section>
          </article>
        </section>

        <aside id="sidebar" role="complementary" />
      </main>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
