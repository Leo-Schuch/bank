import { card } from "../assets";
import { feedback } from "../Constants";
import styles from "../style";
import FeedBackCard from './FeedbackCard';

const Testimonials = () =>  (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>O que as pessoas<br className="sm:block hidden"/> Falam sobre Nós. </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`} >
            Tudo o que você precisa para ser aceito e expandir sua empresa em qualquer lugar do mundo.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedBackCard key={card.id} {...card}/>
        ))}
        
      </div>
    </section>
  )


export default Testimonials