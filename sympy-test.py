import sympy as sp

# Define variables
p_H, p_L, theta = sp.symbols('p_H p_L theta')

# Define voter utility
U_v_H = theta - p_H**2  # Voter utility for high-valence incumbent
U_v_L = theta - p_L**2  # Voter utility for low-valence incumbent

# Define incumbent utility (proxy: voter utility, since advertising is uninformative)
U_inc_H = U_v_H.subs(theta, 2)  # Incumbent utility for theta = 2
U_inc_L = U_v_L.subs(theta, -1)  # Incumbent utility for theta = -1

# Incentive Compatibility Constraints (ICCs)
# High-valence incumbent prefers p_H over p_L
ICC_H = U_inc_H - U_inc_H.subs(p_H, p_L)

# Low-valence incumbent prefers p_L over p_H
ICC_L = U_inc_L - U_inc_L.subs(p_L, p_H)

# Simplify constraints
ICC_H_simplified = sp.simplify(ICC_H)
ICC_L_simplified = sp.simplify(ICC_L)

# Voter utility constraints (voters choose incumbent only if utility is >= 0)
voter_constraint_H = U_v_H.subs(theta, 2) >= 0
voter_constraint_L = U_v_L.subs(theta, -1) >= 0

# Solve voter utility constraints first
voter_constraint_H_solution = sp.solve(voter_constraint_H, p_H)
voter_constraint_L_solution = sp.solve(voter_constraint_L, p_L)

# Solve incentive compatibility constraints as equations (to find boundaries)
icc_h_solution = sp.solve(ICC_H_simplified, p_H)
icc_l_solution = sp.solve(ICC_L_simplified, p_L)

# Print results
print("Incentive Compatibility Constraint for High-valence incumbent (p_H):")
print(icc_h_solution)

print("\nIncentive Compatibility Constraint for Low-valence incumbent (p_L):")
print(icc_l_solution)

print("\nVoter Utility Constraint for High-valence incumbent (p_H):")
print(voter_constraint_H_solution)

print("\nVoter Utility Constraint for Low-valence incumbent (p_L):")
print(voter_constraint_L_solution)
