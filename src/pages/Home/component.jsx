import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { HomePageWrapper } from './styles'
import ArticlesTable from './ArticlesTable'

class Home extends PureComponent {
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

Home.defaultProps = {
  articles: [],
}

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      Body: PropTypes.string,
    }),
  ).isRequired,
}

export default Home
