import 'package:flutter/material.dart';
import 'package:sensors/sensors.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  List<double> accelerometerValues = [0.0, 0.0, 0.0];
  List<double> gyroscopeValues = [0.0, 0.0, 0.0];

  @override
  void initState() {
    super.initState();
    _initializeSensors();
  }

  void _initializeSensors() {
    accelerometerEvents.listen((AccelerometerEvent event) {
      setState(() {
        accelerometerValues = [event.x, event.y, event.z];
      });
    });

    gyroscopeEvents.listen((GyroscopeEvent event) {
      setState(() {
        gyroscopeValues = [event.x, event.y, event.z];
      });
    });
  }

  Future<void> sendDataToApi() async {
    final apiUrl = 'https://your-api-endpoint.com/data';
    final data = {
      'accelerometer': accelerometerValues,
      'gyroscope': gyroscopeValues,
    };

    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(data),
    );

    if (response.statusCode == 200) {
      print('Data sent successfully!');
    } else {
      print('Error sending data: ${response.statusCode}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sensor Data to API'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Accelerometer Values: $accelerometerValues'),
              Text('Gyroscope Values: $gyroscopeValues'),
              ElevatedButton(
                onPressed: sendDataToApi,
                child: Text('Send Data to API'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}