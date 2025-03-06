import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("-------------------------");
    }
}

class EmployeeManagement { // Removed 'public' to avoid filename issues
    public static void main(String[] args) {
        // Creating a list of Employees
        List<Employee> employees = new ArrayList<>();

        // Adding Employee objects
        employees.add(new Employee(101, "Alice Johnson", 55000.50));
        employees.add(new Employee(102, "Bob Williams", 62000.75));
        employees.add(new Employee(103, "Charlie Brown", 58000.00));

        // Displaying all employees' details
        System.out.println("Employee Details:");
        System.out.println("=================");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
