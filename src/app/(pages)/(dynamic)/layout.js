import "@/app/styles/dynamic.css";

export default function RegularLayout({ children }) {
    return(
            <>
                <section>
                    <div className="DynamicPage">
                        {children}
                    </div>
                </section>
            </>
    )
  }