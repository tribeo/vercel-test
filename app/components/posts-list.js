import { Fragment, useState, useEffect } from "react";
import PostPreview from "./post-preview";
import styles from "./top-posts.module.css";

/*
** List with pagination
** Refer here: https://github.com/sonyged/make/blob/master/srv/app/assets/javascripts/react/components/utils/PagenationList.js
*/
export default function PostsList({
  resourceName,
  totalResources,
  currentPage,
  perPage,
}) {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalResources.length / perPage)
  );
  const [currentStatePage, setCurrentStatePage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalResources.length / perPage));
    setCurrentStatePage(currentPage || 1);
  }, [currentPage, totalPages, totalResources]);

  const getCurrentResources = () => {
    const start = (currentStatePage - 1) * perPage;
    const end = start + perPage;
    return totalResources.slice(start, end);
  };

  const renderEmptyContent = () => {
    return <span />;
  };

  const hasPrevPage = () => {
    return currentStatePage > 1;
  };

  const hasNextPage = () => {
    return totalPages > 1 && currentStatePage < totalPages;
  };

  const onPageMove = (page) => {
    setCurrentStatePage(page);
  };

  const renderFirstBtn = () => {
    if (!hasPrevPage()) {
      return (
        <a className="kov-serv-btn light-gray ignore-prevent-submission disabled">
          <i className="icon icon-pagination-first" />
        </a>
      );
    }
    return (
      <a
        className="kov-serv-btn light-gray ignore-prevent-submission prev"
        onClick={() => onPageMove(1)}
      >
        <i className="icon icon-pagination-first" />
      </a>
    );
  };

  const renderPrevBtn = () => {
    if (!hasPrevPage()) {
      return (
        <a className="kov-serv-btn light-gray ignore-prevent-submission disabled">
          <i className="icon icon-pagination-prev" />
        </a>
      );
    }
    return (
      <a
        className="kov-serv-btn light-gray ignore-prevent-submission prev"
        onClick={() => onPageMove(currentStatePage - 1)}
      >
        <i className="icon icon-pagination-prev" />
      </a>
    );
  };
  const renderBtns = () => {
    let buttons = [];
    if (totalPages <= 8) {
      for (let i = 0; i < totalPages; i++) {
        buttons.push(i + 1);
      }
    } else if (currentPage <= 5) {
      for (let i = 0; i < 8; i++) {
        buttons.push(i + 1);
      }
    } else if (currentPage >= totalPages - 3) {
      for (let i = totalPages - 8; i < totalPages; i++) {
        buttons.push(i + 1);
      }
    } else {
      for (let i = currentPage - 5; i < currentPage + 3; i++) {
        buttons.push(i + 1);
      }
    }

    return (
      <div className="pagination-btns-container">
        <div className="page-info">
          {currentStatePage} / {totalPages}
        </div>
        {buttons.map((page) => {
          if (currentStatePage == page) {
            return (
              <div key={page} className="pagination-btn current">
                {page}
              </div>
            );
          }
          return (
            <a
              key={page}
              className="pagination-btn"
              onClick={() => onPageMove(page)}
            >
              {page}
            </a>
          );
        })}
      </div>
    );
  };

  const renderNextBtn = () => {
    if (!hasNextPage()) {
      return (
        <a className="kov-serv-btn light-gray ignore-prevent-submission disabled">
          <i className="icon icon-pagination-next" />
        </a>
      );
    }
    return (
      <a
        className="kov-serv-btn light-gray ignore-prevent-submission"
        onClick={() => onPageMove(currentStatePage + 1)}
      >
        <i className="icon icon-pagination-next" />
      </a>
    );
  };

  const renderLastBtn = () => {
    if (!hasNextPage()) {
      return (
        <a className="kov-serv-btn light-gray ignore-prevent-submission disabled">
          <i className="icon icon-pagination-last" />
        </a>
      );
    }
    return (
      <a
        className="kov-serv-btn light-gray ignore-prevent-submission"
        onClick={() => onPageMove(totalPages)}
      >
        <i className="icon icon-pagination-last" />
      </a>
    );
  };

  const renderPagination = () => {
    if (totalPages <= 1) {
      return <span />;
    }
    return (
      <div className="kov-pagination">
        {renderFirstBtn()}
        {renderPrevBtn()}
        {renderBtns()}
        {renderNextBtn()}
        {renderLastBtn()}
      </div>
    );
  };

  const renderResources = () => {
    if (totalResources) {
      if (totalResources.length == 0) {
        return renderEmptyContent();
      }

      const resources = getCurrentResources();
      if (resources.length === 0) {
        return <span />;
      }

      return renderResourcesContent(resources);
    }

    return <span />;
  };

  const renderResourcesContent = (resources) => {
    const size = "multiple-rows";
    return (
      <div className={`${styles["top-posts-box"]} ${styles[size]}`}>
        {resources.map(({ node }) => (
          <div className={styles["post-box"]} key={node.slug}>
            <PostPreview
              databaseId={node.databaseId}
              title={node.title}
              coverImage={node.featuredImage?.node}
              date={node.date}
              author={node.author?.node}
              slug={node.slug}
              categories={node.categories.edges}
              isViewMore={false}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Fragment>
      <div className={`${resourceName ? resourceName : "default"}-list-container`}>
        {renderResources()}
      </div>
      {renderPagination()}
    </Fragment>
  );
}
