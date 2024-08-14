import "@/app/styles/static.css";

export default function RegularLayout({children }) {
    return(
            
        <section>
            <div className="StaticPage">
                
                    {children}
                
            </div>
        </section>
            
    )
  }