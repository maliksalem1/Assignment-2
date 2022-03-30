// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const sideA = parseInt(document.getElementById('sideA').value)
  const base = parseInt(document.getElementById('base').value)
  const sideB = parseInt(document.getElementById('sideB').value)
  // process
  const perimeter = sideA + base + sideB

  // output
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
