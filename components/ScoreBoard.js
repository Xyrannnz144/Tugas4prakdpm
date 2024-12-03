import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  LinearGradient,
} from "react-native";

const ScoreBoard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  useEffect(() => {
    checkWinner();
  }, [scoreA, scoreB]);

  const checkWinner = () => {
    if (scoreA >= 10) {
      Alert.alert("Pertandingan Selesai", `${teamA} Menang!`);
    } else if (scoreB >= 10) {
      Alert.alert("Pertandingan Selesai", `${teamB} Menang!`);
    }
  };

  const updateScore = (team, increment) => {
    if (team === "A") {
      const newScore = scoreA + increment;
      if (newScore >= 0) setScoreA(newScore);
    } else {
      const newScore = scoreB + increment;
      if (newScore >= 0) setScoreB(newScore);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>⚽ Skor Futsal ⚽</Text>
      </View>

      <View style={styles.scoreContainer}>
        <View style={[styles.teamContainer, styles.teamAContainer]}>
          <View style={styles.teamHeader}>
            <Text style={styles.teamName}>{teamA}</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.score}>{scoreA}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => updateScore("A", 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.minusButton]}
              onPress={() => updateScore("A", -1)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.versus}>
          <Text style={styles.versusText}>VS</Text>
        </View>

        <View style={[styles.teamContainer, styles.teamBContainer]}>
          <View style={styles.teamHeader}>
            <Text style={styles.teamName}>{teamB}</Text>
          </View>
          <View style={styles.scoreBox}>
            <Text style={styles.score}>{scoreB}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={() => updateScore("B", 1)}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.minusButton]}
              onPress={() => updateScore("B", -1)}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>🔄 Reset Skor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f2f5",
  },
  header: {
    backgroundColor: "#1a237e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
    padding: 10,
    gap: 10,
  },
  teamContainer: {
    flex: 0.45,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 150,
    height: 200,
  },
  teamHeader: {
    backgroundColor: "#303f9f",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  scoreBox: {
    backgroundColor: "#e8eaf6",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    minWidth: 80,
    alignItems: "center",
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#1a237e",
  },
  versus: {
    flex: 0.1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  versusText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a237e",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  addButton: {
    backgroundColor: "#4caf50",
  },
  minusButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resetButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ScoreBoard;
