import React from "react";

function Experience() {
  const Headings = ({ headings, activeId }) => (
    <ul>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={heading.id === activeId ? "active" : ""}
        >
          <a
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="toc-link"
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={child.id === activeId ? "active" : ""}
                >
                  <a
                    className="toc-link"
                    href={`#${child.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
  const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = React.useState([]);

    React.useEffect(() => {
      const headingElements = Array.from(document.querySelectorAll("h1, h2"));

      // Created a list of headings, with H2s nested
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
  };

  const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
      const { innerText: title, id } = heading;

      if (heading.nodeName === "H1") {
        nestedHeadings.push({ id, title, items: [] });
      } else if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
        nestedHeadings[nestedHeadings.length - 1].items.push({
          id,
          title,
        });
      }
    });

    return nestedHeadings;
  };
  const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = React.useRef({});
    React.useEffect(() => {
      const callback = (headings) => {
        headingElementsRef.current = headings.reduce((map, headingElement) => {
          map[headingElement.target.id] = headingElement;
          return map;
        }, headingElementsRef.current);

        // Get all headings that are currently visible on the page
        const visibleHeadings = [];
        Object.keys(headingElementsRef.current).forEach((key) => {
          const headingElement = headingElementsRef.current[key];
          if (headingElement.isIntersecting)
            visibleHeadings.push(headingElement);
        });

        const getIndexFromId = (id) =>
          headingElements.findIndex((heading) => heading.id === id);

        // If there is only one visible heading, this is our "active" heading
        if (visibleHeadings.length === 1) {
          setActiveId(visibleHeadings[0].target.id);
          // If there is more than one visible heading,
          // choose the one that is closest to the top of the page
        } else if (visibleHeadings.length > 1) {
          const sortedVisibleHeadings = visibleHeadings.sort(
            (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
          );

          setActiveId(sortedVisibleHeadings[0].target.id);
        }
      };

      const observer = new IntersectionObserver(callback, {
        root: document.querySelector("iframe"),
        rootMargin: "-25px",
      });

      const headingElements = Array.from(document.querySelectorAll("h1, h2"));

      headingElements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, [setActiveId]);
  };
  const TableOfContents = () => {
    const [activeId, setActiveId] = React.useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
      <nav aria-label="Table of contents" id="toc">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    );
  };

  return (
    <div>
      <section className="page-section" id="experience">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Experience
        </h2>
        {/* Icon Divider*/}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="d-flex w-100 justify-content-center align-items-center">
          <div id="experience_table">
            <div>
              <h1 className="mt-3 pt-3" id="work">
                Work Experience
              </h1>
              <h2 className="mt-3 pt-3" id="meta">
                Meta (2016-2023)
              </h2>
              June 2016 - Apr 2023
              <p>
                I worked on Internal Tools at Facebook (Meta) for almost 7
                years. I spent the first 5 years in Mobile Performance (some
                Android, mostly web full stack), and the last 2 in a web full
                stack role for Reliability Metrics. I became a Senior Software
                Engineer (E5) in 2019, and mentored a total of 3 summer interns
                and 6 new hires during my tenure. I typically worked on 1-3
                month long projects, needing very little guidance after I became
                more senior. I'd research needs from customers (aka facebook
                employees) in order for them to accomplish their goals of
                tracking or moving particular metrics and work with a designer
                when available. While I worked primarily as a full stack web
                developer in React, GraphQL, SQL, Python, CSS and PHP, I also
                spent some time writing Android (Java/C++) and iOS
                (Objective-C). While this is quite long as I worked on numerous
                projects over the years, I'll describe in more detail what I
                did.
              </p>
              <ul>
                <li>
                  <b>2020 H2</b> (Python/C++ Android Unwinding) I added OS 9
                  stack unwinding for 32 and 64 bit android phones on the{" "}
                  <a
                    href="https://github.com/facebookincubator/profilo"
                    target="_blank"
                  >
                    profilo
                  </a>
                  . This project was cool because it was basically re-using the
                  AOSP code for stack unwinding except dropping the locks and
                  making it more performant so that it could be used in a
                  production environment instead of solely in a test
                  environment. It used python for finding the address of
                  particular functions, and while other teammates had
                  implemented the OS 6, 7, and 8 versions, I was the one to add
                  OS 9.
                </li>
                <li>
                  <b>2020 H1</b> (Python/C++ Android Unwinding) I added OS 9
                  stack unwinding for 32 and 64 bit android phones on the{" "}
                  <a
                    href="https://github.com/facebookincubator/profilo"
                    target="_blank"
                  >
                    profilo
                  </a>
                  . This project was cool because it was basically re-using the
                  AOSP code for stack unwinding except dropping the locks and
                  making it more performant so that it could be used in a
                  production environment instead of solely in a test
                  environment. It used python for finding the address of
                  particular functions, and while other teammates had
                  implemented the OS 6, 7, and 8 versions, I was the one to add
                  OS 9.
                </li>
                <li>
                  <b>2019 H2</b> (Python, Data Analytics) We noticed many people
                  were struggling to interpret regressions, but if they knew the
                  cause of the regression it would remedy things. For example if
                  a single function could be isolated as causing the regression,
                  or if a certain population group was fully causing the
                  regression (such as only Samsung phones for example) it would
                  immediately solve the problem at hand. I wrote python code to
                  automatically determine these insights and we called the
                  system Perf Insights. This system used basic statistics of "if
                  we removed this population, would there have been a
                  regression" as it's heuristics. In the end we were able to
                  successfully identify 45% of the regressions, with minimal
                  false positives.
                </li>
                <li>
                  <img
                    style={{ width: 250, height: 100, float: "right" }}
                    src="assets/img/experience/breakdown.png"
                  />
                  <b>2019 H1</b> (React, Data Analytics) As Comparison View
                  continued to scale, I explored the option of switching from
                  our in-memory database to Presto which was much cheaper.
                  Initially I found out that presto would be 50x slower, and
                  after implementing various optimizations the query speed would
                  still be 8x slower. However, this was okay, because the most
                  common use case was to study the recent data within 14 days,
                  so I drove alignment across multiple teams to support using
                  the in-memory database on recent data and Presto for the older
                  data which once again saved our growing capacity concerns. I
                  also optimized our python trace processing code by 2x allowing
                  room to continue scaling. Additionally I built a visualization
                  that focused on viewing the average time when critical events
                  occured using custom D3. This allowed customers to get a quick
                  sense of what was blocking their interaction, e.g. network, or
                  CPU. I read stastics papers on how to implement confidence
                  intervals for percentiles, which was a much requested feature
                  which helped establish additional confidence in our tool. As
                  this was the last half I worked on Comparison View, I'll link
                  a great recap of our tool that my former teammate Helga did{" "}
                  <a
                    href="https://atscaleconference.com/systems-scale-2019-new-york-recap/"
                    target="_blank"
                  >
                    here
                  </a>
                  . Find it by searching for "A tale of two performance analysis
                  tools".
                </li>
                <li>
                  <b>2018 H2</b> (SQL, React) As Comparison View grew 7x to 500
                  MAU, I continued to work on capacity improvements. I worked on
                  countless fixes for our customers to make sure the tool would
                  shine. I built a visualization for runtime class loading
                  dependency graph, and enabled the visual of javascript (from
                  Android) stack tracing. I made sure two teams that were
                  working on similar concepts (Scroll Perf vs Responsiveness)
                  produced the same tool so that both would benefit
                  simultaneously from feature improvements. I worked with the
                  database team to introduce a new GROUP BY feature in C++ to
                  introduce Call Trees into our UI without needing to duplicate
                  our tables. Even though we grew, I lowered our storage
                  footprint by 40% via optimizations such as deleting our flat
                  functions table since it could be fully represented by our
                  callstacks table.
                </li>
                <li>
                  <img
                    style={{ width: 250, height: 125, float: "right" }}
                    src="assets/img/experience/dynamic_sample_rate.png"
                  />
                  <b>2018 H1</b> (React, Python, Capacity savings) I mentored 3
                  newer teammates during this time, made a complex configuration
                  UI in React and planned for capacity. Capacity was the most
                  interesting issue, because up until this point we really only
                  had the basic interactions (e.g. cold start, news feed scroll
                  perf). However other teams at Facebook after hearing about the
                  success of our tool wanted to use it, and we were looking at
                  nearly 100x scaling ourselves from 3 interactions to 200.
                  However at the time we were already using terabytes of
                  in-memory storage which made the prospect too expensive. I
                  explained our case to the database team which they agreed with
                  and granted some additional space. But mainly, I solved a
                  problem of dynamically controlling a sample rate to avoid
                  over-collecting from phones. Events would be sampled from
                  phones at a rate of 1 in N, where N was specified by the
                  customer. I came up with the idea that actually we wanted
                  customers to specify the number of events per day required,
                  NOT the sample rate (and further ). When samples returned, we
                  needed to know what the underlying sample rate was used, since
                  if you change a sample rate on the server side, you can't be
                  sure exactly when the phone will update (could be 1-8 hours),
                  so I added a lookup in a key/value database to get this data.
                  Now based on the rate of incoming events / second with each
                  event weighted by the sample rate that was used to get the
                  event, we could accurately compute a new best sample rate
                  every hour. By having accurate sample rates at all times to
                  get the volume that was requested we were able to reduce the
                  amount of storage we needed by an additional 5x, which was an
                  incredible feat.
                </li>
                <li>
                  <b>2017 H2</b> (Javascript, Python, Scroll Perf Analysis) I
                  worked on expanding the performance analysis success we saw in
                  Facebook for Android performance to Scroll Performance,
                  Messenger for Android and iOS. Scroll Performance was an
                  interesting problem, because it was done by looking at all the
                  frames nearby a scroll interaction and taking the ratio of
                  good frames to bad frames, where bad frames are measured as
                  taking greater than 64ms, otherwise they are good. The idea
                  was that the OS can buffer 3 frames in advance, so as long as
                  the frames take less than 64ms to render then we'd probably
                  have a smooth rending experience. I came up with the idea to
                  compare the bad frames from one code version to the bad frames
                  of another code version, and this let us isolate perf
                  regressions and typically find 5-7% regressions in scroll
                  perf. Frames are super short, but they can still be
                  represented as timestamp A to timestamp B, just as measuring
                  something like cold startup time can be measured as app
                  started opening to app finishied opening.
                </li>
                <li>
                  <img
                    style={{ width: 250, height: 300, float: "right" }}
                    src="assets/img/experience/basic_call_graph.png"
                  />
                  <b>2017 H1</b> (Javascript, Python, Performance Analysis) I
                  developed an idea from another Facebook Engineer called the
                  Call Graph for comparing performance callstacks. I used a D3
                  tree layout to implement this. We later patented this{" "}
                  <a
                    href="https://patents.google.com/patent/US10365905B1/en?oq=10365905"
                    target="_blank"
                  >
                    10365905
                  </a>
                  . The novelty of this is that normally performance analysis is
                  done on trees, where each node represents a function_name and
                  each node can only have one edge which represents the
                  function_name that called it. In a graph, a node can have many
                  parents, and two nodes can't share the same name, therefore if
                  a function is called in two different callstacks it will
                  effectively be merged together. The advantage of this is that
                  when comparing changes when a new function_name is introduced
                  or removed they will quickly merge back together and if the
                  total time doesn't appear to have increased after the merge,
                  then you know it's a harmless rename. However, if the time
                  spent has increased then you've quickly found yourself a
                  performance regression and can look through it's callers to
                  figure out who caused it. By sizing the nodes based on total
                  size and using color to indicate change in time it's quick to
                  find regressions. This became the go-to tool for fixing CPU
                  regressions (~10 fixes, ~100ms each) when measuring Facebook
                  Android cold start time. Our tool was called Comparison View,
                  and I'd continue to work on this tool for ~3 years.
                </li>
                <li>
                  <b>2016 H2</b> (Java and C++) Gathered trace data (network
                  requests, and CPU thread counters) from Android phones on the{" "}
                  <a
                    href="https://github.com/facebookincubator/profilo"
                    target="_blank"
                  >
                    profilo
                  </a>{" "}
                  project. These features were not used directly after I made
                  it, but started to be utilized after we improved the
                  visualizations supporting this data in the coming years.
                </li>
              </ul>
              <h2 className="mt-3 pt-3" id="facebook">
                Facebook Internship
              </h2>
              May 2015 - Aug 2015
              <p>
                (Objective-C) I worked on the iOS News Feed team, where my main
                project (6 wks) was to improve the offline capabilities of table
                views. At the time, the Facebook iOS App was developing a
                standard infrastracture of showing tables (e.g. events, friends
                lists, posts etc.) that abstracted away how to paginate data,
                and how to persist data to cache. By fleshing out the on-device
                cache configurability it allowed us to save a variable amount of
                data based on the size of the data, rather than simply a
                hardcoded "2" rows.
              </p>
              <h2 className="mt-3 pt-3" id="gsi">
                Berkeley GSI
              </h2>
              Aug 2014 - May 2015
              <p>
                I was a graduate student instructor at UC Berkeley for the class
                CS169 (Software Engineering). I lead discussion sections, weekly
                team meetings and created tutorials. In this class, students
                work in teams of 4-6 people and use Node, Django, Rails, iOS, or
                Android to provide pro bono work to local community requests.
                They work with real customers, who may or may not be tech savvy.
                I played the role of Product Manager by keeping my 7 teams on
                track to deliver for their customers.
              </p>
              <h2 className="mt-3 pt-3" id="godaddy">
                GoDaddy Internship
              </h2>
              Jun 2014 - Aug 2014
              <p>
                I did Web development for the Online Store product, built on
                spree using Ruby on Rails, Jquery/Javascript, HTML. Most of the
                work was small in scope typically taking 1-3 days consisting of
                bug fixes and small improvements on an agile team.
              </p>
              <h1 className="mt-3 pt-3" id="personal">
                Personal Project Experience
              </h1>
              I worked on a few personal projects that reflect my interest in
              finance.
              <h2 className="mt-3 pt-3" id="options">
                Option Tracker
              </h2>
              2021
              <br />
              <b>
                <a
                  href="https://github.com/Fortisque/option_wheel_tracker"
                  target="_blank"
                >
                  Github
                </a>{" "}
                <a href="https://optionwheel.fly.dev/" target="_blank">
                  Live Site
                </a>
              </b>
              <p>
                <img
                  style={{ width: 250, height: 150, float: "right" }}
                  src="assets/img/experience/option_wheel_tracker.png"
                />
                (Django) I became interested in the Wheel strategy for investing
                options, which basically involes selling a cash secured put, and
                if the price of the stock goes down and you are forced to buy
                the stock then to continually sell covered calls above your cost
                basis and using the premiums to lower your cost basis until you
                sell the stock. I used the python library yfinance to
                effectively scrape option prices and find ones that seemed the
                most valuable and then suggest which covered call price to sell
                for based on the odds of being in the money and the current
                tracked cost basis.
              </p>
              <h2 className="mt-3 pt-3" id="eudo-price">
                MTG Price Comparator
              </h2>
              2016 - 2017
              <p>
                (Ruby on Rails, Python scrapy) I had collected numerous Magic
                The Gathering playing cards and wished to sell them. I used the
                python library scrapy to scrape prices from{" "}
                <a href="https://www.tcgplayer.com/" target="_blank">
                  TCGPlayer
                </a>
                , a local Berekley store named Eudomonia,{" "}
                <a href="https://www.mtggoldfish.com/" target="_blank">
                  MTG Goldfish
                </a>{" "}
                and Pucatrade. I used a cron job on an Amazon EC2 instance to
                keep updating the prices daily. The app would suggest when cards
                could be sold to TCGPlayer or Eudomonia for a profit, and
                featured functionality to help input your entire card collection
                into the app.
              </p>
              <h1 className="mt-3 pt-3" id="school">
                School Experience
              </h1>
              <p>
                During my time at UC Berkeley from Aug 2012 to May 2016, I
                participated in multiple hackathons and also competed in various
                school competitions that acted as extensions of our projects,
                winning multiple of both.
              </p>
              <h2 className="mt-3 pt-3" id="hackathons">
                Hackathons
              </h2>
              <p>ToDo</p>
              <h2 className="mt-3 pt-3" id="school-competitions">
                School Competitions
              </h2>
              <p>ToDo</p>
            </div>
          </div>
          <TableOfContents />
        </div>
      </section>
    </div>
  );
}

export default Experience;
