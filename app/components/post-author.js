import Image from "next/image";
import styles from "./post-author.module.css";

export default function PostAuthor({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  return (
    <div className={styles["post-author-container"]}>
      <div className={`flex ${styles["post-author-item"]}`}>
        <div className={`relative ${styles["post-author-image"]}`}>
          <Image
            src={author?.avatar?.url}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        </div>
        <div className={`text-xl ${styles["post-author-text"]}`}>
          <div className={styles["author-name"]}>{name}</div>
          <div className={styles["author-description"]}>
            {author.description}
          </div>
        </div>
      </div>
    </div>
  );
}
