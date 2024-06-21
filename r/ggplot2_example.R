library(ggplot2)

# Sample data
data <- data.frame(
  group = c("A", "B", "C", "D", "E", "F", "G"),
  value = c(30, 80, 45, 60, 20, 90, 55)
)

ggplot(data, aes(x=group, y=value)) +
  geom_bar(stat="identity", fill="skyblue") +
  theme_minimal() +
  labs(title="Bar Chart with ggplot2", x="Group", y="Value")
