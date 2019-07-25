import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HomePageWrapper } from './styles'
import ArticlesTable from './ArticlesTable'
import {
  getArticles,
  deleteArticle,
} from '../../store/actions/articles'

class Home extends PureComponent {
  componentDidMount () {
    this.props.getArticles()
  }

  render () {
    return (
      <HomePageWrapper>
        <ArticlesTable
          articles={this.props.articles}
          goToEditPage={this.goToEditPage}
          goToCreationPage={this.goToCreationPage}
          handleDeleteClick={this.handleDeleteClick} />
      </HomePageWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => dispatch(getArticles()),
    deleteArticle: id => dispatch(deleteArticle(id)),
  }
}

Home.defaultProps = {
  articles: [],
}

Home.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      Body: PropTypes.string,
    }),
  ).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
