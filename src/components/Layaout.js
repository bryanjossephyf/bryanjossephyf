function Layout({children, className=""}){
    return(
        <div className={`w-full  h-full inline-block z-0 bg-white p-32 lg:p-16  md:p-12 sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export default Layout