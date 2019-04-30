import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const LatestPost = styled.div`
    text-align:center;
    margin:70px 0px 30px;
    h1{
        width:80%;
        margin:0px auto 0px;
    }
    .category{
        margin:35px 0px 50px;
        a{
            color:#929292;
            margin:0px 5px;
            transition:all 0.4s ease;
            font-size:20px;
            &:hover{
                color:#3a3a3a;
                text-decoration:none;
            }
        }
    }
    img{
        width:100%;
        max-height:450px;
        object-fit:cover;
    }
`

export default class FirstPost extends Component {
    render() {
        const data = this.props.data;
    return (
      <LatestPost>
        <div class="uk-container">
            <Link to={'post/' + data.slug}>
                <h1>{data.title}</h1>
            </Link>
            <div className="category">
                {data.categories && data.categories.map(
                        category => <Link key={category.id} to={'categories/'+ category.slug}><span dangerouslySetInnerHTML={{__html:category.name + " "}} /> </Link>
                    )
                }
            </div>
            <img src={data.featured_media.localFile.childImageSharp.original.src} alt=''/>
        </div>
      </LatestPost>
    )
  }
}
