import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../bloc/auth_bloc.dart';
import '../bloc/auth_event.dart';
import '../bloc/auth_state.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final emailController = TextEditingController();

  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SizedBox(
          width: 400,

          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,

            children: [
              TextField(
                controller: emailController,

                decoration: const InputDecoration(labelText: 'Email'),
              ),

              const SizedBox(height: 16),

              TextField(
                controller: passwordController,

                obscureText: true,

                decoration: const InputDecoration(labelText: 'Password'),
              ),

              const SizedBox(height: 24),

              ElevatedButton(
                onPressed: () {
                  context.read<AuthBloc>().add(
                    LoginRequested(
                      email: emailController.text,

                      password: passwordController.text,
                    ),
                  );
                },

                child: const Text('Login'),
              ),

              BlocBuilder<AuthBloc, AuthState>(
                builder: (context, state) {
                  if (state.status == AuthStatus.loading) {
                    return const CircularProgressIndicator();
                  }

                  if (state.status == AuthStatus.failure) {
                    return Text(state.error ?? 'Error');
                  }

                  if (state.status == AuthStatus.authenticated) {
                    return Text('Logged in');
                  }

                  return const SizedBox();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
