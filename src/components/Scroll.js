const Scroll = ({children}) => {
    return(
        <div style={{overflow: 'scroll', height: '90vh'}}>
            {children}
        </div>
    )
}

export default Scroll