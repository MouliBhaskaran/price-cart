import React from 'react'
import "../App.css"

const Pricecart = (props) => {
    
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.value.plan}</h5>
            <h6 className="card-price text-center">{props.value.price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li className={props.value.userEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.userEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.user}</li>
              <li className={props.value.storageEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.storageEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.storage}</li>
              <li className={props.value.publicProjectsEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.publicProjectsEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.publicProjects}</li>
              <li className={props.value.communityAccessEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.communityAccessEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.communityAccess}</li>
              <li className={props.value.privateProjectsEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.privateProjectsEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.privateProjects}</li>
              <li className={props.value.phoneSupportEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.phoneSupportEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.phoneSupport}</li>
              <li className={props.value.subDomainEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.subDomainEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.subDomain}</li>
              <li className={props.value.statusPlanEnabler? "": "text-muted"}><span className="fa-li"><i className={props.value.statusPlanEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.statusPlan}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricecart