import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

# Sample data
data = pd.DataFrame({
    'group': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'value': [30, 80, 45, 60, 20, 90, 55]
})

plt.figure(figsize=(10, 6))
sns.barplot(x='group', y='value', data=data, palette='viridis')
plt.xlabel('Group')
plt.ylabel('Value')
plt.title('Bar Chart with Seaborn')
plt.show()
