#!/bin/bash
# Script para calcular el interés simple

echo "Ingresa el monto principal (p):"
read p
echo "Ingresa la tasa de interés anual (r):"
read r
echo "Ingresa el período de tiempo en años (t):"
read t

# Calcular el interés simple: (p * t * r) / 100
s=$(echo "scale=2; ($p * $t * $r) / 100" | bc)

echo "El interés simple es: $s"
