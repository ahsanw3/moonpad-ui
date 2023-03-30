import Aos from "aos";
import { Collapse } from "antd";
import { forwardRef, useEffect } from "react";

import FAQAnswer from "./FAQAnswer";
import FAQuestion from "./FAQuestion";
import { faq } from "../../content/faq";

import "aos/dist/aos.css";

const { Panel } = Collapse;

const FAQ = forwardRef((props,ref) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div ref={ref} className="py-5 md:py-10">
      <div className="uppercase text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
        <h1 className="uppercase flex justify-center">Frequently</h1>
        <h1 className="uppercase flex justify-center pb-5 sm:pb-8 lg:pb-12 2xl:pb-16">
          Asked Questions
        </h1>
      </div>
      <div className="px-5 sm:space-y-3 lg:space-y-4 xl:space-y-5 sm:px-20 md:px-28 lg:px-36 xl:px-48 2xl:px-60">
        <div
          data-aos="zoom-in"
          data-aos-delay="5000"
          className="border-b-[1px]"
        >
          <Collapse bordered={false} ghost={true}>
            {faq.map((faq, key) => {
              return (
                <Panel
                  className="bg-slate-50/10 border-[1px]"
                  showArrow={false}
                  header={<FAQuestion question={faq.qustion} />}
                  key={faq.key}
                >
                  <FAQAnswer answer={faq.answer} />
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </div>
  );
});
export default FAQ;
