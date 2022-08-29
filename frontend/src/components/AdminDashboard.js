export default function AdminDashboard() {
    return(
        <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">DASHBOARD</p>
        </div>

        <div className="main-cards">

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">TOTAL PRODUCTS : 249</p>
              <span className="material-icons-outlined text-blue">inventory_2</span>
            </div>
            <div className="card-inner">
              <p className="text-primary">TRANSACTION AMOUNT : 249</p>
            </div>
            {/* <div className="card-inner">
              <p className="text-primary">P Month Transaction Amount : 249</p>
            </div> */}
          </div>

          <div className="card">
            <div className="card-inner">
              <p className="text-primary">PURCHASE ORDERS</p>
              <span className="material-icons-outlined text-orange">add_shopping_cart</span>
            </div>
            <span className="text-primary font-weight-bold">83</span>
          </div>
        </div>
      </main>
    )
}