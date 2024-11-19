from collections import deque

def water_jug_problem(capacities, target):
    num_jugs = len(capacities)
    visited = set()  # To track visited states
    queue = deque([((0,) * num_jugs, [])])  # Start with all jugs empty and no steps taken
    solutions = []  # List to store all solutions

    while queue:
        current_jugs, path = queue.popleft()  # Unpack the state and path

        # Check if we've reached the target
        if current_jugs == target:
            solutions.append(path + [current_jugs])  # Store the solution
            continue  # Continue to find other solutions

        # Mark the state as visited
        if current_jugs in visited:
            continue
        visited.add(current_jugs)

        # Generate possible actions
        next_states = []

        # Fill each jug
        for i in range(num_jugs):
            new_jugs = list(current_jugs)
            new_jugs[i] = capacities[i]
            next_states.append((tuple(new_jugs), f"Rule {i+1}: Fill the {capacities[i]}-litre jug"))

        # Empty each jug
        for i in range(num_jugs):
            new_jugs = list(current_jugs)
            new_jugs[i] = 0
            next_states.append((tuple(new_jugs), f"Rule {i + num_jugs + 1}: Empty the {capacities[i]}-litre jug"))

        # Pour from one jug to another
        for i in range(num_jugs):
            for j in range(num_jugs):
                if i != j:
                    new_jugs = list(current_jugs)
                    pour_amount = min(current_jugs[i], capacities[j] - current_jugs[j])
                    new_jugs[i] -= pour_amount
                    new_jugs[j] += pour_amount
                    next_states.append((tuple(new_jugs), f"Rule {2 * num_jugs + i * num_jugs + j + 1}: Pour water from {capacities[i]}-litre jug into {capacities[j]}-litre jug"))

        # Add new states to the queue with updated paths
        for next_jugs, action in next_states:
            queue.append((next_jugs, path + [(current_jugs, action)]))

    return solutions  # Return all solutions found

# Example usage
capacities = (4, 3)  # Capacities of the jugs
target = (2, 3)  # Target amount of water
solutions = water_jug_problem(capacities, target)

if solutions:
    print("Steps to measure", target, "liters:")
    for idx, solution in enumerate(solutions):
        print(f"Solution {idx + 1}:")
        for step in solution:
            print(step)
else:
    print("It's not possible to measure", target, "liters.")