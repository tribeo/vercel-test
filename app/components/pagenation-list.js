import { Component } from "react";

/**
 * You need to implements renderResources() and getResourceName() in sub class.
 */
export default class PagenationList extends Component {
  // static propTypes = {
  //   // hash of array
  //   totalResources: PropTypes.array,
  //   currentPage: PropTypes.number,
  //   perPage: PropTypes.number,
  //   renderResources: PropTypes.func,
  //   renderEmptyContent: PropTypes.func,
  //   renderFirstResource: PropTypes.func,
  //   renderLastResource: PropTypes.func,
  // };

  constructor(props) {
    super(props);
    let { totalResources, currentPage, perPage } = this.props;
    currentPage = currentPage || 1;
    const totalPages = Math.ceil(totalResources.length / perPage);

    this.state = {
      resources: this._getResourcesByPage(1),
      currentPage: currentPage,
      totalPages: totalPages,
    };
  }

  hasNextPage = () => {
    return (
      this.state.totalPages > 1 &&
      this.state.currentPage < this.state.totalPages
    );
  };

  hasPrevPage = () => {
    return this.state.currentPage > 1;
  };

  getRerources = () => {
    return this.state.totalResources;
  };

  getResourceName() {
    if (this.props.resourceName) {
      return this.props.resourceName;
    }
    return "default";
  }

  renderResources() {
    if (this.props.renderResources) {
      return this.props.renderResources();
    }
    return <span />;
  }

  refreshResource() {
    this._refreshResource(this.state.currentPage);
  }

  render() {
    return (
      <div>
        <div className={`${this.getResourceName()}s-container`}>
          {this._renderResources()}
        </div>
        {this._renderPagenation()}
      </div>
    );
  }

  /**
   * You can override this or pass the callback function as the property.
   */
  renderFirstResource() {
    if (this.props.renderFirstResource) {
      return this.props.renderFirstResource();
    }
    return <span />;
  }

  /**
   * You can override this or pass the callback function as the property.
   */
  renderLastResource() {
    if (this.props.renderLastResource) {
      return this.props.renderLastResource();
    }
    return <span />;
  }

  /**
   * You can override this or pass the callback function as the property.
   * @returns {XML}
   */
  renderEmptyContent() {
    if (this.props.renderEmptyContent) {
      return this.props.renderEmptyContent();
    }
    return <span />;
  }

  _renderResources() {
    if (this.state.resources) {
      if (this.state.resources.length == 0) {
        return this.renderEmptyContent();
      }
      return (
        <div className={`${this.getResourceName()}-cards-container`}>
          {this.renderFirstResource()}
          {this.renderResources()}
          {this.renderLastResource()}
        </div>
      );
    }

    return <span />;
  }

  _renderPagenation() {
    if (this.state.totalPages <= 1) {
      return <span />;
    }
    return (
      <div className='kov-pagenation'>
        {this._renderFirstBtn()}
        {this._renderPrevBtn()}
        {this._renderBtns()}
        {this._renderNextBtn()}
        {this._renderLastBtn()}
      </div>
    );
  }

  /**
   * PC only
   */
  _renderBtns() {
    let buttons = [];
    if (this.state.totalPages <= 8) {
      for (let i = 0; i < this.state.totalPages; i++) {
        buttons.push(i + 1);
      }
    } else if (this.state.currentPage <= 5) {
      for (let i = 0; i < 8; i++) {
        buttons.push(i + 1);
      }
    } else if (this.state.currentPage >= this.state.totalPages - 3) {
      for (let i = this.state.totalPages - 8; i < this.state.totalPages; i++) {
        buttons.push(i + 1);
      }
    } else {
      for (
        let i = this.state.currentPage - 5;
        i < this.state.currentPage + 3;
        i++
      ) {
        buttons.push(i + 1);
      }
    }
    return (
      <div className='pagenation-btns-container'>
        <div className='page-info'>
          {this.state.currentPage} / {this.state.totalPages}
        </div>
        {buttons.map((page) => {
          let className = "pagenation-btn";
          if (this.state.currentPage == page) {
            return (
              <div key={page} className='pagenation-btn current'>
                {page}
              </div>
            );
          }
          return (
            <a
              key={page}
              className='pagenation-btn'
              onClick={() => this._onPageMove(page)}
            >
              {page}
            </a>
          );
        })}
      </div>
    );
  }

  _renderFirstBtn() {
    if (!this.hasPrevPage()) {
      return (
        <a className='kov-serv-btn light-gray ignore-prevent-submission disabled'>
          {"<<"}
        </a>
      );
    }
    return (
      <a
        className='kov-serv-btn light-gray ignore-prevent-submission prev'
        onClick={() => this._onPageMove(1)}
      >
        {"<<"}
      </a>
    );
  }

  _renderPrevBtn() {
    if (!this.hasPrevPage()) {
      return (
        <a className='kov-serv-btn light-gray ignore-prevent-submission disabled'>
          {"<"}
        </a>
      );
    }
    return (
      <a
        className='kov-serv-btn light-gray ignore-prevent-submission prev'
        onClick={() => this._onPageMove(this.state.currentPage - 1)}
      >
        {"<"}
      </a>
    );
  }

  _renderNextBtn() {
    if (!this.hasNextPage()) {
      return (
        <a className='kov-serv-btn light-gray ignore-prevent-submission disabled'>
          {">"}
        </a>
      );
    }
    return (
      <a
        className='kov-serv-btn light-gray ignore-prevent-submission'
        onClick={() => this._onPageMove(this.state.currentPage + 1)}
      >
        {">"}
      </a>
    );
  }

  _renderLastBtn() {
    if (!this.hasNextPage()) {
      return (
        <a className='kov-serv-btn light-gray ignore-prevent-submission disabled'>
          {">>"}
        </a>
      );
    }
    return (
      <a
        className='kov-serv-btn light-gray ignore-prevent-submission'
        onClick={() => this._onPageMove(this.state.totalPages)}
      >
        {">>"}
      </a>
    );
  }

  _onPageMove = (page) => {
    this._refreshResource(page);
  };

  _getResourcesByPage = (page) => {
    const { totalResources, perPage } = this.props;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return totalResources.slice(start, end);
  };

  _refreshResource = (page) => {
    const resources = this._getResourcesByPage(page);
    this.setState({
      resources: resources,
      currentPage: page,
    });
  };

  _genSearchUrl() {
    let url = this.props.indexPath;
    return url;
  }
}
