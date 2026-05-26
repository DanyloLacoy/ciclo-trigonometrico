import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [angulo, setAngulo] = useState(0);

  const raio = 125; 

  const radiano = (angulo * Math.PI) / 180;

  const pontoX = raio * Math.cos(radiano) / 2;
  const pontoY = -raio * Math.sin(radiano); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📐 Ciclo Trigonométrico</Text>
      <Text style={styles.angleDisplay}>Ângulo: {Math.round(angulo)}°</Text>

      <View style={styles.graphicArea}>
        
        <View style={styles.circle}>
          
          <View style={styles.axisY} />
          <View style={styles.axisX} />
          
          <View 
            style={[
              styles.movingPoint, 
              {
                
                transform: [
                  { translateX: pontoX },
                  { translateY: pontoY }
                ]
              }
            ]} 
          />
          
        </View>

      </View>

      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Arraste para mudar o ângulo:</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={360}
          minimumTrackTintColor="#0a4b8b"
          maximumTrackTintColor="#f1f1f1"
          thumbTintColor="#48ff00"
          value={angulo}
          onValueChange={(valor) => setAngulo(valor)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  angleDisplay: {
    fontSize: 22,
    fontWeight: '600',
    color: '#39a0a0', 
    marginBottom: 30,
  },
  graphicArea: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 250,
    height: 
    300,
    borderRadius: 100 / 2,
    borderWidth: 6,
    borderColor: '#db0707',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  axisX: {
    width: '50%',
    height: 5,
    backgroundColor: '#ff0000',
    position: 'absolute',
    top: '65%',
  },
  axisY: {
    width: 5,
    height: '70%',
    backgroundColor: '#ff0202',
    position: 'absolute',
  },
  movingPoint: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#33ff00', 
    position: 'absolute',
    shadowColor: '#64485b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 5,
  },
  sliderContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  sliderLabel: {
    color: '#ffffff',
    marginBottom: 10,
    fontSize: 14,
  },
});