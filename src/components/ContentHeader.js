function ContentHeader({headerData, dark}) {
    return (
        <div className={'content-header-wrapper'}>
            <div className={'content-header-title'}>
                {headerData.title}
            </div>
            <div className={`content-header-subtitle ${dark ? 'title-dark' : ''}`}>
                {headerData.subtitle}
            </div>
            <div className={`content-header-text ${dark ? 'title-dark' : ''}`}>{headerData.header}</div>
        </div>
    )
}

export default ContentHeader;