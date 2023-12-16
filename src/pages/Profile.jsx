import React from "react"
let user = {
    fullname: 'Sasima Phanta',
    username: 'Jamajatingjaaa',
    email: 'jassm@gmail.com',
    password: '101046',
    profilepic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bef71cd0-10ed-4fb4-8378-70907a38b823/df97a7-f2f0347f-8c5d-460e-8115-978913790976.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlZjcxY2QwLTEwZWQtNGZiNC04Mzc4LTcwOTA3YTM4YjgyM1wvZGY5N2E3LWYyZjAzNDdmLThjNWQtNDYwZS04MTE1LTk3ODkxMzc5MDk3Ni5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bWc7CGbVD0ZTYqiaub8Pt_OkukxMvxr5TapPFyPvuxM'
}
export default function profile() {
    return (
        <>
            <div className="container bootstrap snippets bootdey w-100 p-3 my-3 rounded-1" style={{ backgroundColor: '#AEE1FC' }}>
                <h1 className="text-primary fw-bold mb-0">Edit Profile</h1>
                <hr className="mt-2"/>
                <div className="d-flex flex-column justify-content-center w-100">
                    <div className=" w-50 mx-auto">
                        <div className="text-center">
                            <img src={user.profilepic} className="avatar img-circle img-thumbnail" style={{maxWidth: "400px"}} alt="avatar" />
                            <h6 className="my-2">Upload a profile </h6>

                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <hr />
                    <div className="personal-info border-start  ">
                        <h className="mt-0 fw-semibold fs-3">Personal info</h>

                        <form className="form-horizontal" role="form">
                            <div className="form-group row py-1">
                                <label className="col-lg-3 control-label align-self-center fw-semibold text-end">Fullname:</label>
                                <div className="col-lg-8">
                                    <input className="form-control " type="text" value={user.fullname} />
                                </div>
                            </div>
                            <div className="form-group row py-1">
                                <label className="col-lg-3 control-label align-self-center fw-semibold text-end">Username</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value={user.username} />
                                </div>
                            </div>
                            <div className="form-group row py-1">
                                <label className="col-lg-3 control-label align-self-center fw-semibold text-end">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" value={user.email} />
                                </div>
                            </div>
                            <div className="form-group row py-1">
                                <label className="col-lg-3 control-label align-self-center fw-semibold text-end">New Password</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="password" value="" />
                                </div>
                            </div>
                            <div className="form-group row py-1">
                                <label className="col-lg-3 control-label align-self-center fw-semibold text-end">Confirm Password</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="password" value="" />
                                </div>
                            </div>
                            <input className="float-end rounded-2 btn " type="submit" style={{backgroundColor: "#4636FC",color:"white",border: "none"}} value="Save" />
                        </form>
                    </div>
                </div>
            </div>
            
        </>

    )
}

