import 'package:equatable/equatable.dart';

enum AuthStatus { initial, loading, authenticated, unauthenticated, failure }

class AuthState extends Equatable {
  final AuthStatus status;

  final String? token;

  final String? role;

  final String? error;

  const AuthState({
    this.status = AuthStatus.initial,
    this.token,
    this.role,
    this.error,
  });

  AuthState copyWith({
    AuthStatus? status,

    String? token,

    String? role,

    String? error,
  }) {
    return AuthState(
      status: status ?? this.status,

      token: token ?? this.token,

      role: role ?? this.role,

      error: error ?? this.error,
    );
  }

  @override
  List<Object?> get props => [status, token, role, error];
}
