import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'
import { HomePageWrapper } from './styles'
import ArticlesTable from './ArticlesTable'
import {
  getArticlesPending,
} from '../../store/actions/articles'

class Home extends PureComponent {
  goToCreationPage = () => {
    this.props.history.push('/create')
  }

  componentDidMount () {
    this.props.getArticles()
  }

  render () {
    return (
      <HomePageWrapper>
        <ArticlesTable
          articles={this.props.articles}
          goToCreationPage={this.goToCreationPage} />
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
  }
}

Home.defaultProps = {
  articles: [],
}

Home.propTypes = {
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
