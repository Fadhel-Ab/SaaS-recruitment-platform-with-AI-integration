import 'package:flutter_bloc/flutter_bloc.dart';
import '../data/auth_repository.dart';
import 'auth_event.dart';
import 'auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository repository;

  AuthBloc(this.repository) : super(const AuthState()) {
    on<LoginRequested>(_login);
  }

  Future<void> _login(LoginRequested event, Emitter<AuthState> emit) async {
    emit(state.copyWith(status: AuthStatus.loading));

    try {
      final result = await repository.login(event.email, event.password);

      emit(
        state.copyWith(
          status: AuthStatus.authenticated,

          token: result['accessToken'],
        ),
      );
    } catch (e) {
      emit(state.copyWith(status: AuthStatus.failure, error: e.toString()));
    }
  }
}
