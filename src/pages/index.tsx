import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${styles.Container} ${inter.className}`}>
      <div className={styles.Content}>web3 women summit</div>
      <div className={styles.Content}>
        <Image
          src="/bottom.png"
          alt="Logo"
          // className="dark:invert"
          width={100}
          height={24}
          priority
        />
        web3 women summit
      </div>
      <div className={styles.Content} style={{ backgroundColor: "#231e14" }}>
        <div className={styles.Infos}>Infos</div>
      </div>
      <div className={styles.Content} style={{ backgroundColor: "#395b73" }}>
        <span>Speakers</span>
        <div className={styles.Speakers}>
          {new Array(5).fill(0).map((u, i) => {
            return (
              <div key={i} className={styles.Photo}>
                <Image
                  src={`/speakers/user${i}.jpg`}
                  alt="Vercel Logo"
                  width={140}
                  height={90}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.Content} style={{ backgroundColor: "#ffc87b" }}>
        <div className={styles.Sponsors}>Sponsors</div>
      </div>
      <div className={styles.Content} style={{ backgroundColor: "#395b73" }}>
        <span>Locale</span>
        <div className={styles.Locale}>
          {new Array(6).fill(0).map((u, i) => {
            return (
              <div key={i} className={styles.LocaleImg}>
                <Image
                  src={`/locale/image${i}.jpeg`}
                  alt=""
                  width={300}
                  height={100}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.Content} style={{ backgroundColor: "#a9d7ff" }}>
        <div className={styles.Partners}>Partners</div>
      </div>
    </div>
  );
}
