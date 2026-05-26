import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from './Testimonials.module.scss';
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay({ stopOnInteraction: false })]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <p>Resumify changed my career. I was stuck in a dead-end fast food job using a resume I made myself. I found Resumify on Reddit. Unlike other “free” tools that hold your resume back, Resumify actually works. Thanks to Resumify, I found work at FedEx Ground and The Source.</p>
          <div>
            <div>
              <h4>Kerem Yılmaz</h4>
              <p>HR & Marketing</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/reddit.svg`} alt="reddit logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>This tool is great. It's easy to use and lets you customize your resume exactly the way you want it [...]</p>
          <div>
            <div>
              <h4>@ZFYildiz</h4>
              <p>Software Developer</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>It's very easy to use and I really enjoy preparing my CV. Small improvement suggestion for the future: sections like “profile” could span the full page width. Still, you've done a great job so far!</p>
          <div>
            <h4>Fatih Gümüş</h4>
            <p>Happy user</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Overall, if you're looking for a free CV builder, we can't recommend anything better than this.</p>
          <div>
            <h4>Consumers Advocate</h4>
            <p>consumersadvocate.org</p>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>Very easy to use. Great tool; they improve with every update. I've been using it for over 2 years.</p>
          <div>
            <div>
              <h4>Utku Çağlar Yazıcı</h4>
              <p>Marketing</p>
            </div>
            <img src={`${import.meta.env.BASE_URL}assets/pletter.svg`} alt="profile logo" />
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>I love your site!!! Keep up the honest work, people need a non-scammy CV builder.</p>
          <div>
            <h4>Baran Erdenay</h4>
          </div>
        </div>
        <div className={styles.embla__slide}>
          <p>I've been waiting for something like this for years and I really appreciate the effort put into this product. You've made professional design and formatting rules accessible and simple for everyone — you should be proud. [...] I've told everyone I know about Resumify. Bravo!</p>
          <div>
            <h4>Tahir Aksoy</h4>
          </div>
        </div>
      </div>
    </div >
  );
}
