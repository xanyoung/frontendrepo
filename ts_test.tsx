import React from 'react'

interface Tags {
    link: string;
    title: string;
}

const Article = (props: {title: any, content: string, isImportant: boolean, images: Array<string>, tags: Array<Tags>}) => {
    const {
        title,
        content,
        isImportant,
        images,
        tags
    } = props

    const renderTag = (tag: Tags) => (
        <a href={ tag.link } key={tag.link}>
            { tag.title }
        </a>
    );

    return (
        <>
            <h2>{ title }</h2>
            <div>{ content }</div>
            { isImportant && (
                <p>It is important!</p>
            ) }
            { images && images.map((item, index) => (
                <img src={ item } key={index} />
            )) }
            { tags && tags.map(item => renderTag(item)) }
        </>
    );
}