import 'package:equatable/equatable.dart';
import 'package:frontend/features/auth/data/models/user_model.dart';

enum AuthStatus { initial, loading, authenticated, unauthenticated, failure }

class AuthState extends Equatable {
  final AuthStatus status;

  final String? token;

  final UserModel? user;

  final String? error;

  const AuthState({
    this.status = AuthStatus.initial,
    this.token,
    this.user,
    this.error,
  });

  AuthState copyWith({
    AuthStatus? status,

    String? token,

    UserModel? user,

    String? error,
  }) {
    return AuthState(
      status: status ?? this.status,

      token: token ?? this.token,

      user: user ?? this.user,

      error: error ?? this.error,
    );
  }

  @override
  List<Object?> get props => [status, token, user, error];
}
