import { Fragment } from "react/cjs/react.production.min";
import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  return (
    <Fragment>
      <div
        className={`${styles.content} post-content-container`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Fragment>
  );
}
