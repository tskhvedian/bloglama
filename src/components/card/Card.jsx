import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ itemKey, post }) => {
  return (
    <div className={styles.container} key={itemKey}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
          <span className={styles.category}> - {post.catSlug}</span>
        </div>
        <Link href={"/"}>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum excepturi
          hic ea, officia rem ab ipsa iusto neque optio, repellendus esse vel
          laboriosam perspiciatis ducimus praesentium deserunt, adipisci minus
          reprehenderit?...
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
