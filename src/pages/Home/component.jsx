import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { HomePageWrapper } from './styles'
import ArticlesTable from './ArticlesTable'
import {
  getArticlesPending,
  deleteArticle,
} from '../../store/actions/articles'

class Home extends PureComponent {
  goToCreationPage = () => {
    this.props.history.push('/create')
  }

  handleDeleteClick = id => {
    this.props.deleteArticle(id)
  }

  componentDidMount () {
    console.log('history', this.props.history)
    this.props.getArticles()
  }

  render () {
    return (
      <HomePageWrapper>
        <ArticlesTable
          articles={this.props.articles}
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
    getArticles: () => dispatch(getArticlesPending()),
    deleteArticle: id => dispatch(deleteArticle(id)),
  }
}

Home.defaultProps = {
  articles: [],
}

Home.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      Body: PropTypes.string,
    }),
  ).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
