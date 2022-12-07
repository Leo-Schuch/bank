import styles from "../style"
import Button from './Button'
styles

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div>
        <h2 className={styles.heading2}>Contrate nossos serviços agora.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Tudo o que você precisa para aceitar a forma de pagamente com o nosso cartão de crédito e inserir sua companhia em qualquer lugar do mundo.</p>        
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )


export default CTA