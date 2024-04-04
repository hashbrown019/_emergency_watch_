import 'package:flutter/material.dart';

void main() {
  runApp(WebBrowserApp());
}

class WebBrowserApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('RescueMeNow'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 300,
                height: 200,
                decoration: BoxDecoration(
                  border: Border.all(color: Colors.grey),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Placeholder(), // Placeholder for web content
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onLoad: () {
                  launch('Pages/index.html');
                },
                child: Text('RescueMeNow/index.html'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}