import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { columns, mockDataSource } from './tableConfig';
import { Table } from 'antd';
import { dataSource } from './tableConfig';

import { HomePageWrapper } from './styles'

class Home extends PureComponent {
    render() {
        return(
            <HomePageWrapper>
                <Table
                    columns={ columns }
                    dataSource={ mockDataSource }
                />
            </HomePageWrapper>
        )
    }
}

Home.propTypes = {
    getArticles: PropTypes.func.isRequired,
    updateArticle: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            Body: PropTypes.string
        }),
    ).isRequired,
}

export default Home;
