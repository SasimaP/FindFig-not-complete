function clickCheck (event,e, func, title){
    func(event.target.checked,e, title)

}

export default function (prop) {
    return (
        <div className="filter">
            <div className="d-flex flex-row justify-content-between "><p className="my-auto fw-medium text-white fs-5">{prop.title}</p><button className="btn fw-bold text-white fs-4 p-0 px-2" data-bs-toggle="collapse" data-bs-target={"#fandom-list-"+prop.title.replace(" ","-")} aria-expanded="false" aria-controls={"fandom-list-"+prop.title.replace(" ","-")}>+</button></div>
            <ul className="collapse ps-3" id={"fandom-list-"+prop.title.replace(" ","-")}>
                { prop.list.map((e) => (<li  className="form-check"><input className="form-check-input" type="checkbox" onChange={(event) => clickCheck(event,e, prop.filterHandler,prop.title)}/><label className="form-check-label fw-medium text-white">{ e }</label></li>)) }
            </ul>
          </div>
    )
}