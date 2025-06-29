
CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;

-- Step 6: Execute Stored Procedure for DepartmentID = 3 (example)
EXEC sp_GetEmployeeCountByDepartment @DepartmentID = 3;