import {card} from '../assets';
import styles, {layout} from '../style'
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Encontre a melhor oferta <br className='sm:block hidden'/> de cartão em alguns passos.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo a quibusdam inventore perferendis dignissimos ex sequi iure, quas necessitatibus recusandae dolorum exercitationem iste laboriosam. Vel voluptatibus enim reprehenderit mollitia.</p>
      <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )


export default CardDeal