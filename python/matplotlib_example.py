import matplotlib.pyplot as plt

# Sample data
x = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
y = [30, 80, 45, 60, 20, 90, 55]

plt.figure(figsize=(10, 6))
plt.bar(x, y, color='skyblue')
plt.xlabel('Group')
plt.ylabel('Value')
plt.title('Bar Chart with Matplotlib')
plt.show()
