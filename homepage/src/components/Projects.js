function Projects() {
  return (
    <div>
      <h2 className="text-success">Capstone Project: HRMS</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card border-success">
            <div className="card-body">
              <h5 className="card-title text-success">
                Human Resource Management System (HRMS)
              </h5>
              <p className="card-text">
                An all-in-one solution for managing employee records, attendance
                tracking, payroll, and performance monitoring. This system
                streamlines HR processes and enhances organizational efficiency
                by centralizing all employee-related data in one platform.
              </p>
              <p>
                <strong>Key Features:</strong>
                <ul>
                  <li>Employee Records Management</li>
                  <li>Attendance and Time Tracking</li>
                  <li>Payroll Automation</li>
                  <li>Leave Management</li>
                  <li>Employee Performance Evaluation</li>
                  <li>Reports and Analytics</li>
                </ul>
              </p>
              <p>
                <strong>Technologies:</strong> Laravel, MySQL, Bootstrap,
                JavaScript, RESTful APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
